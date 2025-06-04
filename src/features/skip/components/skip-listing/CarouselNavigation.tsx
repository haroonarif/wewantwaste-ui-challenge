import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Button, MobileStepper } from "@mui/material";
type CarouselNavigationProps = {
  activeStep: number;
  maxSteps: number;
  onNext?: (e: React.MouseEvent) => void;
  onPrev?: (e: React.MouseEvent) => void;
};

export const CarouselNavigation = ({
  activeStep,
  maxSteps,
  onNext,
  onPrev
}: CarouselNavigationProps) => (
  <MobileStepper
    steps={maxSteps}
    position="static"
    activeStep={activeStep}
    nextButton={
      <Button
        size="small"
        onClick={onNext}
        disabled={activeStep === maxSteps - 1}
        aria-label="Next image"
      >
        <KeyboardArrowRight />
      </Button>
    }
    backButton={
      <Button
        size="small"
        onClick={onPrev}
        disabled={activeStep === 0}
        aria-label="Previous image"
      >
        <KeyboardArrowLeft />
      </Button>
    }
    sx={{
      justifyContent: 'center',
      bgcolor: 'transparent',
    }}
  />
);
