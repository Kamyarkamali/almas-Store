import { steps } from "@/data/data";
import React from "react";

function OrdersSteps() {
  return (
    <div>
      <div className="lg:flex grid grid-cols-2 md:grid-cols-7 sm:grid-cols-7 justify-items-center items-center justify-between relative gap-4 sm:gap-6">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center text-center w-20 sm:w-24">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-blue-100 rounded-full shadow-md">
                <img
                  src={step.image}
                  alt={step.label}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <p className="mt-2 text-[10px] sm:text-[12px] lg:text-[14px] font-bold text-gray-700">
                {step.label}
              </p>
            </div>

            {index < steps.length - 1 && (
              <div className="flex-grow h-1 bg-blue-300 mx-2 hidden sm:block"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default OrdersSteps;
