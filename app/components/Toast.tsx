"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from "react-icons/fa";
import { useThemeColors } from "@/lib/hooks/useThemeColors";

export type ToastType = "success" | "error" | "info";

interface ToastProps {
    id: string;
    type: ToastType;
    message: string;
    duration?: number;
    onClose: () => void;
}

const iconMap = {
    success: FaCheckCircle,
    error: FaExclamationCircle,
    info: FaInfoCircle,
};

const colorMap = {
    success: "#10B981",
    error: "#EF4444",
    info: "#3B82F6",
};

export function Toast({ id, type, message, duration = 3000, onClose }: ToastProps) {
    const { colors, mounted } = useThemeColors();
    const Icon = iconMap[type];

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!mounted) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className="flex items-center gap-3 p-4 rounded-lg shadow-lg min-w-[300px] max-w-md"
            style={{ backgroundColor: colors.card }}
        >
            <Icon size={24} style={{ color: colorMap[type] }} />
            <p className="flex-1 text-sm font-medium" style={{ color: colors.text }}>
                {message}
            </p>
            <button
                onClick={onClose}
                className="p-1 hover:opacity-70 transition-opacity"
                style={{ color: colors.textMuted }}
            >
                <FaTimes size={16} />
            </button>
        </motion.div>
    );
}

interface ToastContainerProps {
    toasts: Array<{
        id: string;
        type: ToastType;
        message: string;
    }>;
    removeToast: (id: string) => void;
}

export function ToastContainer({ toasts, removeToast }: ToastContainerProps) {
    return (
        <div className="fixed top-20 right-4 z-[10001] flex flex-col gap-2">
            <AnimatePresence mode="popLayout">
                {toasts.map((toast) => (
                    <Toast
                        key={toast.id}
                        id={toast.id}
                        type={toast.type}
                        message={toast.message}
                        onClose={() => removeToast(toast.id)}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}

// Hook for using toasts
export function useToast() {
    const [toasts, setToasts] = React.useState<
        Array<{ id: string; type: ToastType; message: string }>
    >([]);

    const addToast = (type: ToastType, message: string) => {
        const id = Math.random().toString(36).substring(7);
        setToasts((prev) => [...prev, { id, type, message }]);
    };

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    return {
        toasts,
        addToast,
        removeToast,
        success: (message: string) => addToast("success", message),
        error: (message: string) => addToast("error", message),
        info: (message: string) => addToast("info", message),
    };
}
