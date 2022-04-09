import { Box } from "@chakra-ui/react";
import { useUser } from "@supabase/supabase-auth-helpers/react";
import type { NextPage } from "next";
import DocumentsTable from "../../components/uploads/DocumentsTable";

const Uploads: NextPage = () => {
  const { user } = useUser();

  if (!user) return null;

  return (
    <Box>
      <DocumentsTable />
    </Box>
  );
};

export default Uploads;
