import { Meta, Title } from "@solidjs/meta";
import { useParams, useSearchParams } from "@solidjs/router";
import { createEffect } from "solid-js";

const hippos = ["heart", "thought"];

export default function Home() {
  const [params, setParams] = useSearchParams();

  const foundHippo = hippos.includes(params.hippo || "");

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      {foundHippo ? (
        <>
          <Meta property="og:image" content={`${params.hippo}.png`} />
          <Meta property="og:image:alt" content={params.hippo} />
          <Title>{params.hippo}</Title>
          <img src={`${params.hippo}.png`} alt={params.hippo} />
        </>
      ) : (
        <Title>no hippo found :(</Title>
      )}
    </main>
  );
}
