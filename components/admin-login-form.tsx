"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { loginAdminAction } from "@/actions/admin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function AdminLoginForm() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <Card className="mx-auto max-w-md border-zinc-200">
      <CardHeader>
        <CardTitle>Admin Access</CardTitle>
        <CardDescription>
          Enter the admin password to view bookings.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const password = String(formData.get("password") ?? "");

            startTransition(async () => {
              const result = await loginAdminAction(password);

              if (!result.success) {
                toast.error(result.message);
                return;
              }

              toast.success("Welcome back.");
              router.refresh();
            });
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter admin password"
            />
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
