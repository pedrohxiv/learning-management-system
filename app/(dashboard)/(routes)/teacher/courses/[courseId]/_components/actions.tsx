"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash } from "lucide-react";

import { ConfirmModal } from "@/components/modals/confirm-modal";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useConfettiStore } from "@/hooks/use-confetti-store";

interface ActionsProps {
  disabled: boolean;
  courseId: string;
  isPublished: boolean;
}

export const Actions = ({ disabled, courseId, isPublished }: ActionsProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const confetti = useConfettiStore();

  const onPublish = async () => {
    try {
      setIsLoading(true);

      if (isPublished) {
        await axios.patch(`/api/courses/${courseId}/unpublish`);

        toast({
          title: "Success!",
          description: "Your course was unpublished.",
          variant: "constructive",
        });
      } else {
        await axios.patch(`/api/courses/${courseId}/publish`);

        toast({
          title: "Success!",
          description: "Your course was published.",
          variant: "constructive",
        });

        confetti.onOpen();
      }

      router.refresh();
    } catch (error: any) {
      console.error(error.message);

      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);

      await axios.delete(`/api/courses/${courseId}`);

      toast({
        title: "Success!",
        description: "Your course was deleted.",
        variant: "constructive",
      });

      router.refresh();
      router.push(`/teacher/courses`);
    } catch (error: any) {
      console.error(error.message);

      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={onPublish}
        disabled={disabled || isLoading}
        variant="outline"
        size="sm"
      >
        {isPublished ? "Unpublish" : "Publish"}
      </Button>
      <ConfirmModal onConfirm={onDelete}>
        <Button
          size="sm"
          disabled={isLoading}
          className="bg-destructive hover:bg-destructive hover:opacity-75"
        >
          <Trash className="h-4 w-4" />
        </Button>
      </ConfirmModal>
    </div>
  );
};
