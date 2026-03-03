import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Apple, Chrome, Infinity, ShieldPlus, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Account created successfully!");
    if (formData.terms) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 500);
    }
  };

  const handleSocialLogin = (provider) => {
    navigate("/dashboard");
  };

  return (
    <>
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-1 gap-0">
        <div className="hidden lg:flex justify-between bg-linear-to-br from-slate-900 via-teal-900 to-orange-600 p-12 text-white">
          <div className="max-w-md ">
            <div className="flex items-center gap-2 mb-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-slate-900 font-bold">
                <ShieldPlus className="text-white" />
              </div>
              <span className="text-2xl font-bold">Security Ops</span>
            </div>
            <h2 className="text-5xl font-bold leading-tight mb-8">
              Expert level Cybersecurity
              <br />
              in <span className="text-cyan-400">hours</span> not weeks.
            </h2>

            <div className="space-y-4 mb-12">
              <h3 className="text-lg font-semibold">What's included</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xl mt-1">✓</span>
                  <span>
                    Effortlessly spider and map targets to uncover hidden
                    security flaws
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xl mt-1">✓</span>
                  <span>
                    Deliver high-quality, validated findings in hours, not
                    weeks.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xl mt-1">✓</span>
                  <span>
                    Generate professional, enterprise-grade security reports
                    automatically.
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">★</span>
                <span className="font-semibold">Trustpilot</span>
              </div>
              <div className="text-sm">
                Rated <span className="font-bold">4.5/5.0</span>{" "}
                <span className="text-gray-300">(100k+ reviews)</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center p-6 lg:p-12 ">
            <Card className="w-full max-w-md">
              <CardHeader className="space-y-2 text-center">
                <CardTitle className="text-3xl">Sign up</CardTitle>
                <CardDescription>
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="text-[#0CC8A8] hover:underline font-medium"
                  >
                    Log in
                  </a>
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password (8+ characters)"
                      value={formData.password}
                      onChange={handleChange}
                      minLength={8}
                      required
                    />
                  </div>

                  <div className="flex items-start gap-3 py-2">
                    <Checkbox
                      id="terms"
                      name="terms"
                      checked={formData.terms}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({ ...prev, terms: checked }))
                      }
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm text-foreground cursor-pointer"
                    >
                      I agree to Ops's{" "}
                      <a href="#" className="text-primary hover:underline">
                        Terms & Conditions
                      </a>{" "}
                      and acknowledge the{" "}
                      <a href="#" className="text-primary hover:underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="bg-[#0CC8A8] hover:bg-[#0CC8A8] w-full h-12 text-base font-semibold rounded-full"
                    disabled={!formData.terms}
                  >
                    Create account
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-card text-muted-foreground">
                      or
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => handleSocialLogin("apple")}
                    className="h-12 rounded-full bg-black hover:bg-black cursor-pointer"
                  >
                    <Apple className="h-5 w-5 text-white" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => handleSocialLogin("google")}
                    className="h-12 rounded-full cursor-pointer"
                  >
                    <Chrome className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => handleSocialLogin("meta")}
                    className="h-12 rounded-full bg-[#0966FF] dark:bg-[#0966FF] dark:hover:bg-[#0966FF] hover:bg-[##0966FF] cursor-pointer"
                  >
                    <Infinity className="h-5 w-5 text-white" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
