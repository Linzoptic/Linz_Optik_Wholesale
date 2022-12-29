import axios from "axios";
import React, { useEffect, useState } from "react";
import { FOOTER_CALL } from "../../Product/constants";
import FooterSkekelton from "../../skeleton/FooterSkekelton";
import { CatchError, FooterType } from "../../utils/interface";

const Footer = () => {
  const [footerInfo, setFooterInfo] = useState<FooterType>();
  const [footerIsLoading, setFooterIsLoading] = useState<boolean>(false);
  const [footerCatchError, setFooterCatchError] = useState<CatchError>();

  useEffect(() => {
    (async () => {
      setFooterIsLoading(true);
      try {
        const correctData = await axios.get(FOOTER_CALL);
        setFooterInfo({
          address: correctData.data[0],
          contact: correctData.data[3],
          locationIcon: correctData.data[4],
          phoneIcon: correctData.data[5],
          phone: correctData.data[6],
          phone1: correctData.data[7],
          timeIcon: correctData.data[9],
          time1: correctData.data[10],
          time2: correctData.data[11],
        });
      } catch (error: any | undefined) {
        setFooterCatchError(error);
      } finally {
        setFooterIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {footerIsLoading ? (
        <FooterSkekelton/>
      ) : (
        <div className="mt-10 p-4 border-t-4">
          <div className="md:flex justify-around flex-wrap ">
            <div className="flex items-center text-center mt-2 p-2">
              <img
                src={footerInfo?.locationIcon.description}
                alt="#location"
                className="w-5 h-5 mx-2"
              />
              <h1>{footerInfo?.address.description}</h1>
            </div>
            <div className="flex items-center mt-2 p-2 text-center border-t-2 md:border-0">
              <img
                src={footerInfo?.phoneIcon.description}
                alt="#phone"
                className="w-6 h-6 mx-2"
              />
              <div>
                <p>{footerInfo?.phone.description}</p>
                <p>{footerInfo?.phone1.description}</p>
              </div>
            </div>
            <div className="flex items-center mt-2 p-2 text-center border-t-2 md:border-0">
              <img
                src={footerInfo?.phoneIcon.description}
                alt="#time"
                className="w-6 h-6 mx-2"
              />
              <div>
                <p>{footerInfo?.time1.description}</p>
                <p>{footerInfo?.time2.description}</p>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-center text-[14px] text-gray-500">
              {footerInfo?.contact.description}
            </p>
          </div>
        </div>
      )}
      {footerCatchError && <p>{footerCatchError?.response.data?.message}</p>}
    </>
  );
};

export default Footer;
