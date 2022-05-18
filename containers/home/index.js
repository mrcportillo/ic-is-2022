import Image from "next/image";
import { useCallback, useState } from "react";
import stylesModule from "../../styles/styles.module.css";
import { TURN_TYPES } from "../../constants";
import Turn from "../../components/Turn";

function Home() {
  const [turn, setTurn] = useState(null);
  const [loadingTurn, setLoadingTurn] = useState(false);

  const onGetTurn = useCallback(
    (type) => async () => {
      setLoadingTurn(true);
      try {
        const response = await (
          await fetch(`${process.env.NEXT_PUBLIC_API_URL}/turn?type=${type}`)
        ).json();
        setTurn(response.turn);
      } catch (error) {
        // eslint-disable-next-line no-alert
        window.alert(error);
      } finally {
        setLoadingTurn(false);
      }
    },
    []
  );

  return (
    <div className={stylesModule.container}>
      <main className={stylesModule.main}>
        <h1 className={stylesModule.title}>Welcome to Queue order</h1>
        <div className={stylesModule.centered}>
          <div className={stylesModule.home_card}>
            <div
              role="button"
              tabIndex={-1}
              className={stylesModule.clickeable}
              onClick={onGetTurn(TURN_TYPES.VIP)}
              onKeyDown={onGetTurn(TURN_TYPES.VIP)}
            >
              VIP &rarr;
            </div>
            <p>Only for VIP customers.</p>
          </div>
          <div className={stylesModule.home_card}>
            <div
              role="button"
              tabIndex={0}
              className={stylesModule.clickeable}
              onClick={onGetTurn(TURN_TYPES.GENERAL)}
              onKeyDown={onGetTurn(TURN_TYPES.GENERAL)}
            >
              General &rarr;
            </div>
            <p>Regular customers and public.</p>
          </div>
        </div>
        {(loadingTurn || turn) && (
          <div className={stylesModule.home_turn}>
            <Turn loading={loadingTurn} turn={turn} />
          </div>
        )}
      </main>

      <footer className={stylesModule.footer}>
        <a
          href="https://github.com/mrcportillo/ic-is-2022"
          target="_blank"
          rel="noopener noreferrer"
        >
          code in{" "}
          <span>
            <Image
              src="/GitHub_Logo.png"
              alt="github Logo"
              width={72}
              height={34}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default Home;
