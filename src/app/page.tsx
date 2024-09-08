"use client";

import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { LogIn } from "lucide-react";

export default function Home() {
  const { isSignedIn } = useUser();

  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-cyan-200 to-cyan-400">
      <div className="w-screen min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold">Chat with any PDF</h1>
            <UserButton afterSignOutUrl="/" />
          </div>
          <div className="mt-2">
            <Button>Go to the Chats</Button>
          </div>
          <p className="max-w-xl mt-2 text-lg text-slate-600">
            Join millions of students, researchers and professionals to instantly
            answer questions and understand research with AI.
          </p>
          <div className="mt-2">
            {isSignedIn ? (
              <h1>Upload File</h1>
            ) : (
              <Link href="/sign-in">
                <Button>
                  Login to get started
                  <LogIn className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}