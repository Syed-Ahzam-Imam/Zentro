"use client";

import Container from "@/components/Container";
import PriceFormatter from "@/components/PriceFormatter";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import useStore from "@/store";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const { getTotalPrice, getSubTotalPrice, resetCart } = useStore();
  const groupedItems = useStore((state) => state.getGroupedItems());
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePurchaseOrder = () => {
    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.address) {
      toast.error("Please fill in all shipping details");
      return;
    }

    setLoading(true);
    // Mock purchase process
    setTimeout(() => {
      toast.success("Order placed successfully!");
      resetCart();
      router.push("/success");
    }, 2000);
  };

  if (groupedItems.length === 0) {
    return (
      <Container className="py-20 text-center">
        <Title>Your cart is empty</Title>
        <p className="mt-4 text-lightColor">Add some products to your cart before checking out.</p>
        <Button className="mt-8" onClick={() => router.push("/")}>
          Return to Shop
        </Button>
      </Container>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <Container>
        <Title className="mb-8">Checkout</Title>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Side: Shipping Details */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-shop_dark_green">Shipping Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                name="address"
                placeholder="123 Street Name"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  name="city"
                  placeholder="New York"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode">Zip Code</Label>
                <Input
                  id="zipCode"
                  name="zipCode"
                  placeholder="10001"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                name="country"
                placeholder="USA"
                value={formData.country}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* Right Side: Order Summary */}
          <div className="flex flex-col gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-shop_dark_green mb-6">Order Summary</h2>
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {groupedItems.map(({ product, quantity }) => (
                  <div key={product?._id} className="flex items-center gap-4">
                    <div className="w-16 h-16 relative rounded-lg overflow-hidden border">
                      {product?.images && product.images[0] && (
                        <Image
                          src={urlFor(product.images[0]).url()}
                          alt={product?.name || "Product Image"}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold line-clamp-1">{product?.name}</h3>
                      <p className="text-xs text-lightColor">Qty: {quantity}</p>
                    </div>
                    <PriceFormatter amount={(product?.price || 0) * quantity} className="font-bold text-sm" />
                  </div>
                ))}
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="discountCode">Discount Code</Label>
                  <div className="flex gap-2">
                    <Input id="discountCode" placeholder="Enter code" />
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>

                <div className="space-y-2 pt-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-lightColor">Subtotal</span>
                    <PriceFormatter amount={getSubTotalPrice()} />
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-lightColor">Shipping</span>
                    <span className="font-semibold text-shop_dark_green">Free</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-lightColor">Discount</span>
                    <PriceFormatter amount={getSubTotalPrice() - getTotalPrice()} />
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-xl font-bold text-shop_dark_green">Total</span>
                    <PriceFormatter amount={getTotalPrice()} className="text-2xl font-extrabold text-black" />
                  </div>
                </div>

                <Button
                  className="w-full h-14 text-lg font-bold rounded-xl mt-6 hoverEffect bg-shop_dark_green"
                  onClick={handlePurchaseOrder}
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Purchase Order"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CheckoutPage;
