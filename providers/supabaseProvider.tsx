"use client";

import { useState } from "react";
import { Database } from "@/types_db";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

interface SupabaseProviderProps {
    children: React.ReactNode;
};

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({
    children
}) => {
    const [supabaseClient] = useState(() => 
        createClientComponentClient<Database>()
    )
}