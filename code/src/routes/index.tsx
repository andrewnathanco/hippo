import { Meta, Title } from "@solidjs/meta";
import { useParams, useSearchParams } from "@solidjs/router";
import { createEffect } from "solid-js";

const hippos = ["heart", "thought"];

export default function Index() {
  return (
    <main class="p-4 justify-center items-center flex flex-col">
      <div class="p-4 w-96 flex flex-col items-center space-y-4">
        <div class="text-center">
          a simple way to let people know
          <br />
          you're thinking of them
        </div>
        <img src="/screenshot.svg" class="h-128"></img>
        <div class="flex flex-col space-y-2 w-full">
          <a
            href="https://forms.gle/Y3cLNWGu2MoaYR1z5"
            class="p-3 bg-rose-500 flex justify-center text-almond-50 rounded-xl text-xl w-full cursor-pointer"
          >
            submit a hippo
          </a>
          <a
            href="/choose"
            class="p-3 bg-matterhorn-900 flex justify-center text-almond-50 rounded-xl text-xl w-full cursor-pointer"
          >
            send a hippo
          </a>
        </div>
      </div>
    </main>
  );
}
