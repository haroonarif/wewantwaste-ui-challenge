import { Suspense } from "react";
import SkipPage from "../../../features/skip/page";

export const steps = [
    {
      label: 'Select Skip',
      description: 'Select the skip size that best suits your needs',
      content: (
        <Suspense fallback={<div>Loading...</div>}>
          <SkipPage />
        </Suspense>
      ),
    },
    {
      label: 'Select Dates',
      description: 'Choose your rental dates',
      content: (
        <Suspense fallback={<div>Loading...</div>}>
          <SkipPage />
        </Suspense>
      ),
    },
    {
      label: 'Confirmation',
      description: 'Review and confirm your order',
      content: (
        <Suspense fallback={<div>Loading...</div>}>
          <SkipPage />
        </Suspense>
      ),
    },
  ];