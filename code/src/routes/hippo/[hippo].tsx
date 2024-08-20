import { Meta, Title } from "@solidjs/meta";
import { useParams } from "@solidjs/router";
import hippos from "../../data/hippos.json";
import { createEffect } from "solid-js";

export default function Hippo() {
  const params = useParams();

  const foundHippo = () => hippos.find((hippo) => params.hippo == hippo.slug);

  createEffect(() => {
    console.log(foundHippo()?.image);
  });

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      {foundHippo() ? (
        <>
          <Meta property="og:image" content={`/${foundHippo()?.image}`} />
          <Meta property="og:image:alt" content={foundHippo()?.name} />

          <Title>{foundHippo()?.name}</Title>

          <img src={`/${foundHippo()?.image}`} alt={foundHippo()?.name} />
        </>
      ) : (
        <Title>no hippo found :(</Title>
      )}
    </main>
  );
}
