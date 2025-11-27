import React from "react";
import { Down } from "./Down";
import { Up } from "./Up";
import { Users } from "./Users";
import divider2 from "./divider-2.svg";
import divider3 from "./divider-3.svg";

export const CustomerCardsSection = () => {
  const cardsData = [
    {
      id: 1,
      value: "78",
      label: "Total customers",
      icon: <Users className="!relative !w-6 !h-6" />,
      trend: "up",
      trendValue: "10.2",
      trendText: "+1.01% this week",
      showIcon: true,
    },
    {
      id: 2,
      value: "654",
      label: "NICE Avg score",
      icon: null,
      trend: "down",
      trendValue: "2.56",
      trendText: "-0.91% this week",
      showIcon: false,
    },
    {
      id: 3,
      value: "321",
      label: "KCB Avg score",
      icon: null,
      trend: "down",
      trendValue: "2.56",
      trendText: "-0.91% this week",
      showIcon: false,
    },
  ];

  return (
    <section
      className="inline-flex items-center gap-[38px] p-5 absolute top-[177px] left-[376px] bg-white rounded-xl border border-solid border-border"
      aria-label="Customer statistics cards"
    >
      {cardsData.map((card, index) => (
        <React.Fragment key={card.id}>
          <article className="flex flex-col w-[198px] items-start gap-3 relative">
            <header className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-primary text-[28px] tracking-[0] leading-[42px] whitespace-nowrap">
                  {card.value}
                </div>
                <div className="relative w-fit font-body font-[number:var(--body-font-weight)] text-primary text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] whitespace-nowrap [font-style:var(--body-font-style)]">
                  {card.label}
                </div>
              </div>
              {card.showIcon && (
                <div
                  className="gap-2.5 p-2.5 bg-white rounded-xl shadow-shadow inline-flex items-start relative flex-[0_0_auto]"
                  aria-hidden="true"
                >
                  {card.icon}
                </div>
              )}
            </header>
            <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <div
                className="inline-flex items-center gap-2 relative flex-[0_0_auto]"
                aria-label={`Trend ${card.trend}`}
              >
                {card.trend === "up" ? (
                  <Up className="!relative !w-5 !h-5" />
                ) : (
                  <Down className="!relative !w-5 !h-5" />
                )}
                <div className="relative w-fit mt-[-1.00px] font-footnote font-[number:var(--footnote-font-weight)] text-secondary text-[length:var(--footnote-font-size)] tracking-[var(--footnote-letter-spacing)] leading-[var(--footnote-line-height)] whitespace-nowrap [font-style:var(--footnote-font-style)]">
                  {card.trendValue}
                </div>
              </div>
              <div className="relative flex-1 mt-[-1.00px] font-footnote font-[number:var(--footnote-font-weight)] text-secondary text-[length:var(--footnote-font-size)] tracking-[var(--footnote-letter-spacing)] leading-[var(--footnote-line-height)] [font-style:var(--footnote-font-style)]">
                {card.trendText}
              </div>
            </div>
          </article>
          {index < cardsData.length - 1 && (
            <img
              className="relative w-px h-[102px] object-cover"
              alt=""
              src={index === 0 ? divider2 : divider3}
              role="presentation"
            />
          )}
        </React.Fragment>
      ))}
    </section>
  );
};
