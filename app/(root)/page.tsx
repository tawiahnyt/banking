/** @format */

import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.action";
import React from "react";

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage you account and transactions efficiently"
          />
        </header>

        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={120234532.23}
        />
      </div>
      <RightSidebar
        user={loggedIn}
        transcations={[]}
        banks={[{ currentBalance: 9123422.29 }, { currentBalance: 5847392.02 }]}
      />
    </section>
  );
};

export default Home;
