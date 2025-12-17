import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Props {
    isOpen: boolean;
    onConfirm: () => void;
    onClose: () => void;
}

export default function AdConfirmationModal({ isOpen, onConfirm, onClose }: Props) {
    if (!isOpen) return null;

    const handleAdClick = () => {
        // Open ad in new window
        window.open("https://deg.kr/799c1ba", "_blank");
        // Confirm action after click
        onConfirm();
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-white rounded-xl shadow-2xl w-full max-w-sm overflow-hidden relative"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="p-6 text-center">
                        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                            🎁
                        </div>

                        <h3 className="text-xl font-bold text-slate-800 mb-2">
                            잠깐! 결과 확인 전...
                        </h3>
                        <p className="text-slate-600 mb-6 text-sm">
                            <span className="font-bold text-detective-navy">광고(후원사)를 1회 방문</span>해주시면<br />
                            탐정이 무료로 결과를 보여드립니다! 🕵️‍♂️
                        </p>

                        <button
                            onClick={handleAdClick}
                            className="w-full py-3 bg-detective-navy text-white font-bold rounded-lg hover:bg-slate-700 transition-colors shadow-lg active:scale-95 flex items-center justify-center gap-2"
                        >
                            광고 보고 결과 확인하기
                        </button>

                        <p className="text-xs text-slate-400 mt-3">
                            * 새로운 탭에서 광고가 열리며, 결과가 바로 표시됩니다.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
