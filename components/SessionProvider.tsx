"use client"

import { SessionProvider as Provider } from "next-auth/react";
import { Session } from "next-auth";
import { type } from "os";

type Props = {
    children: React.ReactNode;
    session: Session;
}

export function SessionProvider({ children, session }: Props) {
    return (
        <Provider>
            {children}
        </Provider>
    )
} 
