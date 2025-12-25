import { Redirect } from 'expo-router';

export default function Index() {
  // TODO: 将来的にここで認証チェックを実装
  // 認証済みならホームへ、未認証ならログイン画面へリダイレクト

  return <Redirect href="/home" />;
}
