import Link from "next/link";

const HomeComponent = () => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-1 ">
        <Link href="/coinDetails">
          <div className="flex justify-center items-center gold-card bg-sky-900 m-2 md:m-4 lg:m-5 rounded-md h-20 sm:h-24 md:h-40 text-white text-center ">
            <p>Gold Coin</p>
          </div>
        </Link>
        <Link href="/coinDetails">
          <div className="flex justify-center items-center bg-sky-900 m-2 md:m-4 lg:m-5 rounded-md h-20 sm:h-24 md:h-40 text-white text-center ">
            <p>Gold Bars</p>
          </div>
        </Link>
        <Link href="/coinDetails">
          <div className="flex justify-center items-center silver-card m-2 md:m-4 lg:m-5 rounded-md h-20 sm:h-24 md:h-40 text-white text-center ">
            <p>Silver Coin</p>
          </div>
        </Link>
        <Link href="/coinDetails">
          <div className="flex justify-center items-center bg-sky-900 m-2 md:m-4 lg:m-5 rounded-md h-20 sm:h-24 md:h-40 text-white text-center ">
            <p>Silver bar</p>
          </div>
        </Link>
        <Link href="/coinDetails">
          <div className="flex justify-center items-center bg-sky-900 m-2 md:m-4 lg:m-5 rounded-md h-20 sm:h-24 md:h-40 text-white text-center ">
            <p>silver Rounds</p>
          </div>
        </Link>
      </div>
      <div className="p-5 md:p-11 lg:p-11 md:w-full lg:w-full m-auto">
        <table className="coin-table table-auto w-full">
          <thead className="bg-slate-900">
            <tr>
              <th>coin name</th>
              <th>Bullion Trading</th>
              <th>APMEX</th>
              <th>JMBullion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1oz American Eagle Gold Coin</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1oz Gold Bar Pamp Suisse Lady</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1 oz African Kruggerand gold coin</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1 oz Canadian Maple leaf gold coin</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1 Kilo gold bar</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1 oz Gold Bars Random</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1 oz American Eagle Silver</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>100 oz Silver Bar</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1 oz Silver Bars</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1 oz Silver Rounds</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>100 oz Silver Bar Pamp</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomeComponent;
