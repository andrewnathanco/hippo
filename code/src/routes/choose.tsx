import hippos from "../data/hippos.json";
import { Hippo } from "../data/hippo";

function HippoCard(props: { hippo: Hippo }) {
  const hippo = () => props.hippo;

  return (
    <div class="flex flex-col space-y-1">
      <a href={`/hippo/${hippo().slug}`} class="">
        <img
          class="rounded-xl border-4 border-matterhorn-900"
          src={hippo().image}
        ></img>
      </a>
      <div
        class="p-3 bg-matterhorn-900 flex justify-center text-almond-50 rounded-xl text-xl w-full cursor-pointer font-normal"
        onClick={() => {
          // if navigator.share is not available, do nothing
          if (!navigator.share) {
            try {
              navigator.clipboard.writeText(
                `${import.meta.env.VITE_BASE_URL}/hippo/${hippo().slug}`
              );
            } catch {}

            return;
          }

          navigator.share({
            url: `${import.meta.env.VITE_BASE_URL}/hippo/${hippo().slug}`,
          });
        }}
      >
        send the
        <span class="px-1 text-bold text-rose-400 font-bold w-fit">
          {hippo().name}{" "}
        </span>
        hippo
      </div>
    </div>
  );
}

export default function Choose() {
  return (
    <main class="p-4 justify-center items-center flex flex-col">
      <div class="p-4 w-96 flex flex-col items-center space-y-4 h-fit">
        <a href="/" class="underline flex items-center space-x-1">
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
        <ul class="flex flex-col space-y-4">
          {hippos.map((hippo) => {
            return <HippoCard hippo={hippo} />;
          })}
        </ul>
        <div class="p-4 w-96 flex flex-col items-center space-y-4"></div>
      </div>
    </main>
  );
}
