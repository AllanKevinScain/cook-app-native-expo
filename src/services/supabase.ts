import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseURL = `${process.env.EXPO_PUBLIC_SUPABASE_URL}`;
const supabaseKEY = `${process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY}`;

export const supabase = createClient(supabaseURL, supabaseKEY);
