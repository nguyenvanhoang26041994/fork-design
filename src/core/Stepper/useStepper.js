import { useCallback, useState, useMemo } from 'react';

const checkSkipable = function(step, skipable) {
  const skipableLength = skipable.length;

  for (let i = 0; i < skipableLength; i++) {
    if (skipable[i] === step) {
      return true;
    }
  }

  return false;
};

export default (defaultProps = {}) => {
  const [statuses, setStatuses] = useState(defaultProps.statuses || []); // LIST CURRENT STEP STATUS
  const [activeStep, setActiveStep] = useState(defaultProps.activeStep || 0); // CURRENT STEP
  const [finishStep, setFinishStep] = useState(defaultProps.finishStep || 0); // LAST STEP

  const [skipable, setSkipable] = useState(defaultProps.skipable || []); // LIST STEP YOU CAN SKIP TO GO NEXT STEP
  const isFinished = useMemo(() => activeStep === finishStep && statuses[activeStep] === 'completed', [activeStep, finishStep, statuses]); // STEPS FINISHED
  const isSkipable = useMemo(() => checkSkipable(activeStep, skipable), [activeStep, skipable]); // CURRENT STEP CAN BE SKIP

  const goNext = useCallback(() => {
    if (activeStep < finishStep) {
      setActiveStep(prev => prev + 1);
      setStatuses(prev => {
        const next = [...prev];
        next[activeStep] = 'completed';
        next[activeStep + 1] = 'processing';
        return next;
      });
    }
  }, [activeStep, setActiveStep, finishStep, setStatuses]);

  const goBack = useCallback(() => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1);
      setStatuses(prev => {
        const next = [...prev];
        next[activeStep] = '';
        next[activeStep - 1] = 'processing';
        return next;
      });
    }
  }, [activeStep, setActiveStep, setStatuses]);

  const goReset = useCallback(() => {
    setStatuses(['processing']);
    setActiveStep(0);
  }, [setStatuses, setActiveStep]);

  const goSkip = useCallback(() => {
    if (activeStep < finishStep && checkSkipable(activeStep, skipable)) {
      setActiveStep(prev => prev + 1);
      setStatuses(prev => {
        const next = [...prev];
        next[activeStep] = '';
        next[activeStep + 1] = 'processing';
        return next;
      });
    }
  }, [activeStep, setActiveStep, finishStep, skipable, setStatuses]);

  const goCancel = useCallback(() => {
    setStatuses(prev => {
      const next = [...prev];
      next[activeStep] = 'canceled';
      return next;
    });
  }, [setStatuses, activeStep]);

  const goFinish = useCallback(() => {
    if (activeStep === finishStep) {
      setStatuses(prev => {
        const next = [...prev];
        next[activeStep] = 'completed';
        return next;
      });
    }
  }, [activeStep, finishStep, setStatuses]);

  const goError = useCallback(() => {
    setStatuses(prev => {
      const next = [...prev];
      next[activeStep] = 'error';

      return next;
    })
  }, [activeStep, setStatuses]);

  return [
    {
      activeStep,
      finishStep,
      statuses,
      goNext,
      goBack,
      goReset,
      goSkip,
      goCancel,
      goFinish,
      goError,
      isFinished,
      isSkipable,
    },
    {
      setStatuses,
      setActiveStep,
      setFinishStep,
      setSkipable,
      checkSkipable,
    },
  ];
}
