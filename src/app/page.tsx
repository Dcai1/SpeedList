import MainPage from "./MainPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Shopping List",
  description:
    "SpeedList is a clean, responsive shopping list web app that helps you quickly create, manage, and send a perfectly formatted shopping list, ready for sharing through text or notes.",
};

export default function Home() {
  return <MainPage />;
}
