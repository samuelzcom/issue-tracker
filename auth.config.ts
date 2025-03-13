import type { NextAuthConfig } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
 
export default { providers: [GoogleProvider] } satisfies NextAuthConfig