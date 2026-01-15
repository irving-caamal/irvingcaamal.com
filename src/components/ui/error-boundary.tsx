import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { Button } from '~/shared/ui/button';
import { AlertCircle } from 'lucide-react';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center rounded-lg border border-destructive/20 bg-destructive/5 m-4">
      <div className="p-3 bg-destructive/10 rounded-full mb-4">
        <AlertCircle className="w-6 h-6 text-destructive" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-foreground">
        Something went wrong
      </h3>
      <p className="text-sm text-muted-foreground mb-4 max-w-md">
        {error.message ||
          'An unexpected error occurred while rendering this component.'}
      </p>
      <Button onClick={resetErrorBoundary} variant="outline" size="sm">
        Try again
      </Button>
    </div>
  );
}

interface Props {
  children: React.ReactNode;
}

export function ErrorBoundary({ children }: Props) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
}
