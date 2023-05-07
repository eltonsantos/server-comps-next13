export async function RepoList() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const repos = await fetch(
    "https://api.github.com/users/eltonsantos/repos"
  ).then((response) => response.json());

  return (
    <div>
      {JSON.stringify(repos, null, 2)}
    </div>
  );
}
