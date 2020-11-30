import { useQuery } from "@apollo/client"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMeQuery } from "../../generated/graphql";

export const useNotAuth = () => {
    const { data, loading } = useMeQuery();
    const router = useRouter();
    useEffect(() => {
      if(!loading && data?.me) {
        router.push("/home");
      }
    }, [loading, data, router]);
  }