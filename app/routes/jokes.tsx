import { Outlet, Link } from "@remix-run/react";
import { Header } from "@components"

export default function JokesRoute() {
  return (
    <div>
      <Header />
      <main>
        <div>
          <div>
            <Link to=".">Get a random joke</Link>
            <p>Here are a few more jokes to check out:</p>
            <ul>
              <li>
                <Link to="some-joke-id">Hippo</Link>
              </li>
            </ul>
            <Link to="new" className="button">
              Add your own
            </Link>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
