import Fade from "@/components/Fade";
import { useRouter } from "next/router";

const Dynamic = () => {
  const router = useRouter();
  console.log(router);

  const { id } = router.query;

  console.log(id);
  return (
    <Fade>
      <div className="flex justify-center items-center h-screen">
        <h1>Dynamic {id}</h1>
      </div>
    </Fade>
  );
};

export default Dynamic;
