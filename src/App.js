import "./styles.css";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/UserCard";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { BrowserRouter } from "react-router-dom";


const user = {
  name: "じゃけぇ",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "abc@google.com",
  tel: "090-1111-2222",
  company: "テスト株式会社",
  website: "https://google.com"
};

export const App = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br /><br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
