"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { logoutAdminAction } from "@/actions/admin";
import { Button } from "@/components/ui/button";

export function AdminLogoutButton() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <Button
      variant="outline"
      size="sm"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await logoutAdminAction();
          router.refresh();
        });
      }}
    >
      {isPending ? "Signing out..." : "Sign out"}
    </Button>
  );
}
