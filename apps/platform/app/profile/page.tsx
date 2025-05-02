"use client";

import { useAuth } from "@/providers/auth-provider";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { login } from "../actions";

export default function ProfilePage() {
  const { user, isLoading, isAuthenticated } = useAuth();

  // Redirect to login if not authenticated after loading
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      login();
    }
  }, [isLoading, isAuthenticated]);

  if (isLoading) {
    return (
      <div className="container py-10">
        <div className="flex justify-center items-center min-h-[50vh]">
          <p className="text-lg">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>User Information</CardTitle>
          <CardDescription>Your account details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium leading-none">Username</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {user?.username}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium leading-none">Email</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {user?.email}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium leading-none">User ID</h3>
              <p className="text-sm text-muted-foreground mt-1">{user?.id}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
