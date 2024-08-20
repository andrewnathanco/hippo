import hippos from "../data/hippos.json";
import { Hippo } from "../data/hippo";

function HippoCard(props: { hippo: Hippo }) {
  const hippo = () => props.hippo;

  return (
    <div class="flex flex-col space-y-2">
      <a href={`/hippo?hippo=${hippo().slug}`} class="">
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
                `${import.meta.env.VITE_BASE_URL}/hippo?hippo=${hippo().slug}`
              );
            } catch {}

            return;
          }

          navigator.share({
            url: `${import.meta.env.VITE_BASE_URL}/hippo?hippo=${hippo().slug}`,
          });
        }}
      >
        send the
        <span class="px-1 text-bold text-rose-400 font-bold">
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
      <div class="p-4 w-96 flex flex-col items-center space-y-4">
        <ul class="flex flex-col space-y-2">
          {hippos.map((hippo) => {
            return <HippoCard hippo={hippo} />;
          })}
        </ul>
        <div class="p-4 w-96 flex flex-col items-center space-y-4"></div>
      </div>
    </main>
  );
}
