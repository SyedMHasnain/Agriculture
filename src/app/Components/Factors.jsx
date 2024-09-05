import React from "react";

const Factors = () => {
  return (
    <section id="factors" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          Factors Driving High Outputs & Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4">
            <h4 className="text-xl font-bold mb-2">Crop Selection</h4>
            <p>Expert guidance for yield optimization.</p>
          </div>
          <div className="p-4">
            <h4 className="text-xl font-bold mb-2">Market Analysis</h4>
            <p>Ensuring maximum ROI.</p>
          </div>
          <div className="p-4">
            <h4 className="text-xl font-bold mb-2">
              Infrastructure Development
            </h4>
            <p>Boosts productivity and reduces risks.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Factors;
