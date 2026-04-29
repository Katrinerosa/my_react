export default async function Profile({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  return (
    <h1>Profil for: {(await params).username}</h1>
  );
}
