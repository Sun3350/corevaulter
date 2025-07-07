import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/useAuth";
import { Spinner, Center } from "@chakra-ui/react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoading, isAuthenticated } = useAuth(true);
  const router = useRouter();

  if (isLoading || (!isAuthenticated && router.pathname !== "/login")) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  return <>{children}</>;
}
