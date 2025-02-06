import React from "react";
import Title from "./Title";

const Posts = () => {
  return (
    <section className="bg-white h-full flex-1 p-4 rounded-lg shadow-lg space-y-6">
      <Title text="All Jobs" />

      <div className="grid grid-cols-2 gap-4">
        {/* Item1 */}
        <div>
          <img src="/images/image1.jpg" alt="image1" />
          <h2 className="text-lg font-semibold">
            CBN reinstates Jimoh Musa as director of key payments unit
          </h2>
          <p>
            Nigeria’s Central Bank (CBN) has reinstated Jimoh Musa Itopa, a
            director in the Payments System Management Department (PSMD). His
            return signals a significant leadership change in the crucial
            department responsible for licensing payment switching companies,
            regulating agent banks, and overseeing cashless policies and open
            banking initiatives. In 2023, he was reassigned to the Capacity
            Development Department, a unit responsible for training CBN staff.
          </p>
        </div>
        {/* Item1 */}
        <div>
          <img src="/images/image2.jpg" alt="image2" />
          <h2>CBN reinstates Jimoh Musa as director of key payments unit</h2>
          <p>
            Nigeria’s Central Bank (CBN) has reinstated Jimoh Musa Itopa, a
            director in the Payments System Management Department (PSMD). His
            return signals a significant leadership change in the crucial
            department responsible for licensing payment switching companies,
            regulating agent banks, and overseeing cashless policies and open
            banking initiatives. In 2023, he was reassigned to the Capacity
            Development Department, a unit responsible for training CBN staff.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Posts;
