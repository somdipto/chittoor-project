import React, { useState } from "react";
import { ArrowLeft, Heart, Users, Leaf, Star, QrCode, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const DonatePage = () => {
  const [upiId, setUpiId] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);
  const predefinedAmounts = ["100", "500", "1000", "2500", "5000"];
  const generateUPIQR = () => {
    const amount = selectedAmount || customAmount;
    if (!upiId || !amount) return "";
    const upiURL = `upi://pay?pa=${upiId}&pn=Chittoor Project&am=${amount}&cu=INR&tn=Donation for Chittoor Project`;
    return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(upiURL)}`;
  };
  const handleDonate = () => {
    const amount = selectedAmount || customAmount;
    if (upiId && amount) {
      setShowQR(true);
    }
  };
  const copyUPIId = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const impactImages = [{
    src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=600&fit=crop",
    alt: "Sustainable farming",
    title: "Sustainable Agriculture",
    description: "Your donation helps farmers adopt eco-friendly practices"
  }, {
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
    alt: "Wildlife conservation",
    title: "Wildlife Protection",
    description: "Supporting biodiversity in rural areas"
  }, {
    src: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=800&h=600&fit=crop",
    alt: "Rural development",
    title: "Community Development",
    description: "Building stronger rural communities"
  }];
  return <div className="min-h-screen flex flex-col bg-gradient-to-b from-chittoor-offwhite to-white">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} className="mb-6">
          <Link to="/" className="inline-flex items-center text-chittoor-green hover:text-chittoor-green-dark transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-chittoor-green to-chittoor-green-dark rounded-full mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-chittoor-green to-chittoor-blue bg-clip-text text-transparent mb-4">
            Support Our Mission
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Your donation helps us build sustainable communities and protect rural heritage in Chittoor
          </p>
        </motion.div>

        {/* Impact Images Section */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }} className="mb-16">
          
          
        </motion.div>

        {/* Donation Form */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4
      }} className="max-w-2xl mx-auto">
          <Card className="p-8 shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
                Make a Donation
              </CardTitle>
              <p className="text-gray-600">
                Support our rural development initiatives through UPI
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {!showQR ? <>
                  {/* UPI ID Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your UPI ID
                    </label>
                    <Input type="text" placeholder="yourname@upi" value={upiId} onChange={e => setUpiId(e.target.value)} className="text-lg p-4 border-2 border-gray-200 focus:border-chittoor-green" />
                  </div>

                  {/* Amount Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Choose Amount (₹)
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                      {predefinedAmounts.map(amount => <Button key={amount} variant={selectedAmount === amount ? "default" : "outline"} onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount("");
                  }} className={`p-4 text-lg font-semibold ${selectedAmount === amount ? "bg-chittoor-green hover:bg-chittoor-green-dark" : "border-2 border-gray-200 hover:border-chittoor-green"}`}>
                          ₹{amount}
                        </Button>)}
                    </div>
                    
                    <Input type="number" placeholder="Custom amount" value={customAmount} onChange={e => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount("");
                }} className="text-lg p-4 border-2 border-gray-200 focus:border-chittoor-green" />
                  </div>

                  {/* Donate Button */}
                  <Button onClick={handleDonate} disabled={!upiId || !selectedAmount && !customAmount} className="w-full p-6 text-lg font-semibold bg-gradient-to-r from-chittoor-green to-chittoor-green-dark hover:from-chittoor-green-dark hover:to-chittoor-green disabled:opacity-50">
                    <Heart className="w-5 h-5 mr-2" />
                    Generate Donation QR
                  </Button>
                </> : (/* QR Code Display */
            <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-chittoor-green to-chittoor-green-dark rounded-full mb-4">
                    <QrCode className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800">
                    Scan to Donate ₹{selectedAmount || customAmount}
                  </h3>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg inline-block">
                    <img src={generateUPIQR()} alt="UPI QR Code" className="w-64 h-64 mx-auto" />
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">UPI ID:</p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="font-mono text-lg">{upiId}</span>
                      <Button size="sm" variant="outline" onClick={copyUPIId} className="ml-2">
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button variant="outline" onClick={() => setShowQR(false)} className="flex-1">
                      Back to Form
                    </Button>
                    <Button onClick={() => window.location.reload()} className="flex-1 bg-chittoor-green hover:bg-chittoor-green-dark">
                      New Donation
                    </Button>
                  </div>
                </div>)}
            </CardContent>
          </Card>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.6
      }} className="mt-16 text-center">
          
        </motion.div>
      </main>

      <Footer />
    </div>;
};
export default DonatePage;