"use client";

import { useEffect, useRef } from "react";
import { useThemeColors } from "@/lib/hooks/useThemeColors";

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
}

export function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { isDarkMode, mounted } = useThemeColors();
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        if (!mounted) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // Initialize particles
        const particleCount = 50;
        particlesRef.current = Array.from({ length: particleCount }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.2,
        }));

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", handleMouseMove);

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach((particle, index) => {
                // Update position
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Mouse interaction
                const dx = mouseRef.current.x - particle.x;
                const dy = mouseRef.current.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    particle.x -= dx * 0.02;
                    particle.y -= dy * 0.02;
                }

                // Bounce off walls
                if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

                // Keep in bounds
                particle.x = Math.max(0, Math.min(canvas.width, particle.x));
                particle.y = Math.max(0, Math.min(canvas.height, particle.y));

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = isDarkMode
                    ? `rgba(167, 139, 250, ${particle.opacity})`
                    : `rgba(124, 58, 237, ${particle.opacity})`;
                ctx.fill();

                // Draw connections
                particlesRef.current.forEach((otherParticle, otherIndex) => {
                    if (index === otherIndex) return;
                    const dx2 = particle.x - otherParticle.x;
                    const dy2 = particle.y - otherParticle.y;
                    const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

                    if (distance2 < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.strokeStyle = isDarkMode
                            ? `rgba(167, 139, 250, ${0.1 * (1 - distance2 / 150)})`
                            : `rgba(124, 58, 237, ${0.1 * (1 - distance2 / 150)})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                });
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isDarkMode, mounted]);

    if (!mounted) return null;

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.4 }}
        />
    );
}
