"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// تعریف اسکیمای فرم‌ها
const billingAddressSchema = z.object({
  firstName: z.string().min(1, { message: "نام را وارد کنید" }),
  lastName: z.string().min(1, { message: "نام خانوادگی را وارد کنید" }),
  city: z.string().min(1, { message: "شهر را وارد کنید" }),
  province: z.string().min(1, { message: "استان را وارد کنید" }),
  address: z.string().min(1, { message: "آدرس را وارد کنید" }),
  postalCode: z.string().regex(/^\d{10}$/, {
    message: "کد پستی باید ۱۰ رقم باشد",
  }),
});

const shippingAddressSchema = z.object({
  firstName: z.string().min(1, { message: "نام را وارد کنید" }),
  lastName: z.string().min(1, { message: "نام خانوادگی را وارد کنید" }),
  address: z.string().min(1, { message: "آدرس را وارد کنید" }),
});

// نوع داده‌ها برای فرم‌ها
type BillingAddress = z.infer<typeof billingAddressSchema>;
type ShippingAddress = z.infer<typeof shippingAddressSchema>;

const MyAddressComponent: React.FC = () => {
  const [showBillingForm, setShowBillingForm] = useState(false);
  const [showShippingForm, setShowShippingForm] = useState(false);

  const [billingAddress, setBillingAddress] = useState<BillingAddress | null>(
    null
  );
  const [shippingAddress, setShippingAddress] =
    useState<ShippingAddress | null>(null);

  // فرم آدرس صورت‌حساب
  const {
    register: registerBilling,
    handleSubmit: handleBillingSubmit,
    setValue: setBillingValue,
    formState: { errors: billingErrors },
  } = useForm<BillingAddress>({
    resolver: zodResolver(billingAddressSchema),
  });

  // فرم آدرس ارسال
  const {
    register: registerShipping,
    handleSubmit: handleShippingSubmit,
    setValue: setShippingValue,
    formState: { errors: shippingErrors },
  } = useForm<ShippingAddress>({
    resolver: zodResolver(shippingAddressSchema),
  });

  // ارسال آدرس صورت‌حساب
  const onSubmitBilling = (data: BillingAddress) => {
    setBillingAddress(data);
    setShowBillingForm(false); // مخفی کردن فرم بعد از ثبت
    console.log("Billing Address Submitted:", data);
  };

  // ارسال آدرس ارسال
  const onSubmitShipping = (data: ShippingAddress) => {
    setShippingAddress(data);
    setShowShippingForm(false); // مخفی کردن فرم بعد از ثبت
    console.log("Shipping Address Submitted:", data);
  };

  // ویرایش آدرس صورت‌حساب
  const handleEditBilling = () => {
    if (billingAddress) {
      Object.entries(billingAddress).forEach(([key, value]) =>
        setBillingValue(key as keyof BillingAddress, value)
      );
      setShowBillingForm(true);
    }
  };

  // ویرایش آدرس ارسال
  const handleEditShipping = () => {
    if (shippingAddress) {
      Object.entries(shippingAddress).forEach(([key, value]) =>
        setShippingValue(key as keyof ShippingAddress, value)
      );
      setShowShippingForm(true);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-5 space-x-4 mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => {
            setShowBillingForm(!showBillingForm);
            setShowShippingForm(false);
          }}
        >
          آدرس صورت حساب
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => {
            setShowShippingForm(!showShippingForm);
            setShowBillingForm(false);
          }}
        >
          آدرس ارسال
        </button>
      </div>

      {/* فرم آدرس صورت‌حساب */}
      {showBillingForm && (
        <form
          onSubmit={handleBillingSubmit(onSubmitBilling)}
          className="space-y-4"
        >
          {[
            { name: "firstName", label: "نام" },
            { name: "lastName", label: "نام خانوادگی" },
            { name: "city", label: "شهر" },
            { name: "province", label: "استان" },
            { name: "address", label: "آدرس" },
            { name: "postalCode", label: "کد پستی" },
          ].map(({ name, label }) => (
            <div key={name}>
              <label className="block text-sm font-medium">{label}</label>
              <input
                {...registerBilling(name as keyof BillingAddress)}
                className="w-full p-2 border rounded"
                placeholder={label}
              />
              {billingErrors[name as keyof BillingAddress] && (
                <p className="text-red-500 text-sm">
                  {
                    billingErrors[name as keyof BillingAddress]
                      ?.message as string
                  }
                </p>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            ذخیره آدرس صورت حساب
          </button>
        </form>
      )}

      {/* فرم آدرس ارسال */}
      {showShippingForm && (
        <form
          onSubmit={handleShippingSubmit(onSubmitShipping)}
          className="space-y-4"
        >
          {[
            { name: "firstName", label: "نام" },
            { name: "lastName", label: "نام خانوادگی" },
            { name: "address", label: "آدرس" },
          ].map(({ name, label }) => (
            <div key={name}>
              <label className="block text-sm font-medium">{label}</label>
              <input
                {...registerShipping(name as keyof ShippingAddress)}
                className="w-full p-2 border rounded"
                placeholder={label}
              />
              {shippingErrors[name as keyof ShippingAddress] && (
                <p className="text-red-500 text-sm">
                  {
                    shippingErrors[name as keyof ShippingAddress]
                      ?.message as string
                  }
                </p>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            ذخیره آدرس ارسال
          </button>
        </form>
      )}

      {/* نمایش آدرس‌های ذخیره شده */}
      <div className="mt-6">
        {billingAddress && (
          <div>
            <h3 className="font-bold text-xl">آدرس صورت حساب</h3>
            <p>نام: {billingAddress.firstName}</p>
            <p>نام خانوادگی: {billingAddress.lastName}</p>
            <p>شهر: {billingAddress.city}</p>
            <p>استان: {billingAddress.province}</p>
            <p>آدرس: {billingAddress.address}</p>
            <p>کد پستی: {billingAddress.postalCode}</p>
          </div>
        )}

        {shippingAddress && (
          <div className="mt-4">
            <h3 className="font-bold text-xl">آدرس ارسال</h3>
            <p>نام: {shippingAddress.firstName}</p>
            <p>نام خانوادگی: {shippingAddress.lastName}</p>
            <p>آدرس: {shippingAddress.address}</p>
            <button
              onClick={handleEditShipping}
              className="px-4 py-2 bg-yellow-500 text-white rounded mt-2"
            >
              ویرایش
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAddressComponent;
