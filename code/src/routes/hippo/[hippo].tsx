import { Meta, Title } from "@solidjs/meta";
import { useParams } from "@solidjs/router";
import hippos from "../../data/hippos.json";

function Callout(props: { text: string }) {
  return (
    <div class="border-2 border-matterhorn-900 p-2 w-full rounded-xl h-fit">
      {props.text}
    </div>
  );
}

export default function Hippo() {
  const params = useParams();

  const foundHippo = () => hippos.find((hippo) => params.hippo == hippo.slug);

  return (
    <main class="p-4 justify-center items-center flex flex-col h-full">
      <div class="p-4 w-96 flex flex-col items-center space-y-4 h-fit">
        <a href="/" class="underline flex items-center space-x-1 h-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
          <div>go home</div>
        </a>
        {foundHippo() ? (
          <>
            <Meta property="og:image" content={`${foundHippo()?.image}`} />
            <Meta property="og:image:alt" content={foundHippo()?.name} />
            <Title>{foundHippo()?.name}</Title>

            <div class="flex flex-col space-y-1 w-full h-fit">
              <Callout text="no response necessary, this person was just thinking of you. please enjoy this hand drawn hippo" />
            </div>
            <img
              class="border-4 border-matterhorn-900 rounded-xl"
              src={`${foundHippo()?.image}`}
              alt={foundHippo()?.name}
            />
            <div class="flex flex-col space-y-1 w-full h-fit">
              <a
                href={foundHippo()?.artist}
                class="p-3 bg-rose-500 flex justify-center text-almond-50 rounded-xl text-xl w-full cursor-pointer"
              >
                link to the artist
              </a>
              <a
                href="/choose"
                class="p-3 bg-matterhorn-900 flex justify-center text-almond-50 rounded-xl text-xl w-full cursor-pointer h-min"
              >
                send a hippo
              </a>
            </div>
          </>
        ) : (
          <>
            <Title>hippo</Title>
            <div class="text-xl">no hippo found</div>
          </>
        )}
      </div>
    </main>
  );
}
