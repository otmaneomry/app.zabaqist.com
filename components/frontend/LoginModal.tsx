import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Facebook } from 'lucide-react';

const LoginModal = ({ isOpen, onClose }) => {
    const [showEmailLogin, setShowEmailLogin] = useState(false);

    const handleEmailLogin = () => {
        setShowEmailLogin(true);
    };

    const resetView = () => {
        setShowEmailLogin(false);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{showEmailLogin ? "Login" : "The best way to learn math and computer science."}</DialogTitle>
                </DialogHeader>
                {!showEmailLogin ? (
                    <>
                        <div className="flex flex-col space-y-4">
                            <Button variant="outline" className="flex items-center justify-center">
                                <Facebook className="w-5 h-5 mr-2" />
                                Log in with Google
                            </Button>
                            <Button variant="outline" className="flex items-center justify-center">
                                <Mail className="w-5 h-5 mr-2" />
                                Log in with Facebook
                            </Button>
                            <Button variant="outline" className="flex items-center justify-center">
                                <Mail className="w-5 h-5 mr-2" />
                                Continue with Apple
                            </Button>
                            <Button variant="secondary" onClick={handleEmailLogin}>
                                Log in with Email
                            </Button>
                        </div>
                        <div className="text-center mt-4">
                            New user? <a href="#" className="text-blue-500">Sign up</a>
                        </div>
                    </>
                ) : (
                    <>
                        <form className="space-y-4">
                            <Input type="email" placeholder="Email" />
                            <Input type="password" placeholder="Password" />
                            <Button className="w-full">Log in</Button>
                        </form>
                        <div className="flex justify-between mt-4 text-sm">
                            <a href="#" className="text-blue-500">Reset password</a>
                            <a href="#" className="text-blue-500">New user? Sign up</a>
                        </div>
                        <div className="text-xs text-center mt-4">
                            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply
                        </div>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default LoginModal;