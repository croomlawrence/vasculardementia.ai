"use client";

import Link from "next/link";
import { useEffect, useMemo, useSyncExternalStore } from "react";
import LeadForm from "@/components/LeadForm";
import { trackVascuMindEvent } from "@/lib/trackVascuMindEvent";
import { memoryScreenPrice } from "@/lib/business";

type Params = {
  sessionId?: string;
  paymentIntent?: string;
  checkoutStatus?: string;
};

export default function PaidBaselineIntake({ compact = false }: { compact?: boolean }) {
  const searchString = useSyncExternalStore(
    () => () => undefined,
    () => window.location.search,
    () => "",
  );
  const params = useMemo<Params>(() => {
    const search = new URLSearchParams(searchString);
    return {
      sessionId: search.get("session_id") || search.get("stripe_session_id") || undefined,
      paymentIntent: search.get("payment_intent") || undefined,
      checkoutStatus: search.get("checkout_status") || search.get("redirect_status") || undefined,
    };
  }, [searchString]);
  const hasCheckoutSignal = Boolean(params.sessionId || params.paymentIntent || params.checkoutStatus);
  const context = useMemo(() => ({
    checkoutStage: "post_payment_intake",
    product: "memory-screen",
    price: memoryScreenPrice,
    stripeSessionId: params.sessionId,
    stripePaymentIntent: params.paymentIntent,
    checkoutStatus: params.checkoutStatus,
    sourcePath: "/memory-screen/thank-you",
  }), [params]);

  useEffect(() => {
    trackVascuMindEvent("post_payment_page_view", {
      eventData: {
        product: "memory-screen",
        price: memoryScreenPrice,
        hasCheckoutSignal,
        checkoutStatus: params.checkoutStatus,
      },
    });
  }, [hasCheckoutSignal, params.checkoutStatus]);

  return (
    <section className={`${compact ? "" : "border-4 border-black rounded-3xl p-6 md:p-8"} bg-white`} id="paid-intake">
      <div className="mb-6">
        <div className="section-label mb-3">Fulfillment intake</div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Complete the routing details for your {memoryScreenPrice} memory baseline.</h2>
        <p className="text-xl text-black mb-4">
          This step helps VascuMind match your payment/request to the right screening workflow and follow-up. Please do not enter sensitive medical records or emergency details here.
        </p>
        {hasCheckoutSignal ? (
          <p className="border-2 border-black rounded-2xl p-4 bg-[#EAF5F0] font-semibold">
            Checkout return detected. Finish this brief intake so the screening request can be routed.
          </p>
        ) : (
          <p className="border-2 border-black rounded-2xl p-4 bg-[#F8F4EA] font-semibold">
            If you have not completed checkout yet, start on the memory baseline page first. If Stripe sent you here after payment, continue below.
          </p>
        )}
      </div>

      <LeadForm
        leadType="memory-screen"
        title="Memory baseline intake"
        submitLabel="Submit Baseline Intake"
        context={context}
        compact
      />
      <p className="text-base text-black mt-4">
        Need to restart checkout? <Link href="/memory-screen" className="underline font-semibold">Return to the memory baseline page</Link>.
      </p>
    </section>
  );
}
