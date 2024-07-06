import * as React from "react";
import { PlasmicCanvasHost, registerComponent } from "@plasmicapp/react-web/lib/host";
import SignUp from "@/components/Form";
import SignIn from "@/components/Form2";
import MyTabs from "@/components/MyTabs";

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

registerComponent(SignUp, {
  name: "SignUp",
  props: {
    config: "object",
    children: "slot",
  },
  importPath: "../components/Form.tsx",
});

registerComponent(SignIn, {
  name: "SignIn",
  props: {
    config: "object",
    children: "slot",
  },
  importPath: "../components/Form2.tsx",
});

registerComponent(MyTabs, {
  name: "MyTabs",
  props: {
    config: "object",
    children: "slot",
    data: {
      type: "array",
    },
  },
  importPath: "../components/MyTabs.tsx",
});

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
