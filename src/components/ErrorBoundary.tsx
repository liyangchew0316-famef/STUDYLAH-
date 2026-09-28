import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RotateCcw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in STUDYLAH app:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#02000D] text-[#EBDED4] flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-[#07203F]/80 border border-[#D9AA90]/30 rounded-3xl p-8 text-center space-y-6 shadow-2xl backdrop-blur-xl">
            <div className="w-16 h-16 rounded-2xl bg-[#A65E46]/20 border border-[#D9AA90]/30 flex items-center justify-center mx-auto text-[#D9AA90]">
              <AlertCircle size={32} />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-display font-bold text-[#EBDED4]">Something went wrong</h2>
              <p className="text-sm text-[#EBDED4]/60">
                An unexpected issue occurred while rendering this study session. Don't worry, your progress is safe.
              </p>
              {this.state.error?.message && (
                <div className="p-3 bg-[#02000D]/60 rounded-xl text-xs text-[#D9AA90]/80 font-mono text-left overflow-x-auto max-h-24">
                  {this.state.error.message}
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => this.setState({ hasError: false, error: null })}
                className="flex-1 py-3 px-4 rounded-xl bg-[#02000D] hover:bg-[#02000D]/80 border border-[#D9AA90]/30 text-xs font-bold text-[#EBDED4] flex items-center justify-center gap-2 transition-all"
              >
                <RotateCcw size={14} /> Try Again
              </button>
              <button
                onClick={this.handleReset}
                className="flex-1 py-3 px-4 rounded-xl bg-[#A65E46] hover:bg-[#A65E46]/90 text-xs font-bold text-[#EBDED4] flex items-center justify-center gap-2 transition-all shadow-md shadow-[#A65E46]/20"
              >
                <Home size={14} /> Return to Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
