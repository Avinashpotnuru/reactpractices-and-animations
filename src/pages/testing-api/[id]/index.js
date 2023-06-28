import React from "react";
import { useRouter } from "next/router";
import FakeTestingApi from "@/components/FakeApiTest";

const DynamicTesting = () => {
  const router = useRouter();

  console.log(router);
  const { id } = router.query;
  console.log(id);
  return (
    <div>
      <FakeTestingApi pageId={id} />
    </div>
  );
};

export default DynamicTesting;
