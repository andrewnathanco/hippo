import { Meta, Title } from "@solidjs/meta";
import { useSearchParams } from "@solidjs/router";
import hippos from "../data/hippos.json";

export default function Hippo() {
  const [params, _] = useSearchParams();
  const foundHippo = () => hippos.find((hippo) => params.hippo == hippo.slug);

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      {foundHippo() ? (
        <>
          <Meta property="og:image" content={`${foundHippo()?.image}`} />
          <Meta property="og:image:alt" content={foundHippo()?.name} />

          <Title>{foundHippo()?.name}</Title>

          <img src={`${foundHippo()?.image}`} alt={foundHippo()?.name} />
        </>
      ) : (
        <Title>no hippo found :(</Title>
      )}
    </main>
  );
}
