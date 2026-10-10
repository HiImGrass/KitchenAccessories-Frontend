'use client';

import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';
import { PlacedOrderDetails } from '@/types/checkout';
import Link from 'next/link';

interface CheckoutSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderDetails: PlacedOrderDetails | null;
}

export const CheckoutSuccessModal: React.FC<CheckoutSuccessModalProps> = ({
  isOpen,
  onClose,
  orderDetails,
}) => {
  if (!orderDetails) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      backdrop="blur"
      placement="center"
      classNames={{
        base: 'bg-surface-white border border-warm-sand/60 rounded-2xl shadow-xl overflow-hidden relative !outline-none focus:!outline-none focus-visible:!outline-none data-[focus-visible=true]:!outline-none !ring-0 focus:!ring-0',
        header: 'border-b border-warm-sand/30 pb-3 pt-6 px-6',
        body: 'py-6 px-6',
        footer: 'border-t border-warm-sand/30 py-4 px-6',
        closeButton: '!top-4.5 !right-4.5 !left-auto p-2 text-olive-gray hover:text-on-surface hover:bg-canvas-cream active:bg-warm-sand/30 transition-colors cursor-pointer rounded-full z-50 !outline-none focus:!outline-none focus-visible:!outline-none !ring-0',
      }}
    >
      <ModalContent className="!outline-none focus:!outline-none focus-visible:!outline-none">
        <ModalHeader className="flex flex-col items-center text-center">
          <div className="size-14 rounded-full bg-secondary-container text-on-secondary-fixed flex items-center justify-center mb-3 shadow-xs">
            <span
              className="material-symbols-outlined text-[32px] text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
          </div>
          <h2 className="font-headline-sm text-2xl font-bold text-on-surface">
            Order Confirmed &amp; In Crafting
          </h2>
          <p className="text-xs text-olive-gray mt-1">
            Thank you for supporting traditional guild craftsmanship.
          </p>
        </ModalHeader>

        <ModalBody>
          <div className="bg-canvas-cream/60 border border-warm-sand/60 rounded-xl p-4.5 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-olive-gray">Order Reference Number:</span>
              <span className="font-mono font-bold text-primary tracking-wider">
                {orderDetails.orderId}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-olive-gray">Recipient Email:</span>
              <span className="font-medium text-on-surface truncate max-w-[200px]">
                {orderDetails.customerEmail}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-olive-gray">Shipping Method:</span>
              <span className="font-medium text-on-surface">
                {orderDetails.shippingMethodName}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-olive-gray">Estimated Artisan Delivery:</span>
              <span className="font-bold text-secondary">
                {orderDetails.estimatedDelivery}
              </span>
            </div>

            <div className="pt-2 border-t border-warm-sand/40 flex items-center justify-between">
              <span className="text-xs font-bold text-on-surface">Total Paid:</span>
              <span className="font-price-lg text-lg font-bold text-terracotta">
                ${orderDetails.total.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-start gap-3 bg-surface-container/50 p-3 rounded-lg border border-warm-sand/30">
            <span className="material-symbols-outlined text-[20px] text-terracotta shrink-0 mt-0.5">
              mark_email_read
            </span>
            <p className="text-[11px] text-olive-gray leading-relaxed">
              We have dispatched your digital receipt and workshop tracking link to{' '}
              <strong className="text-on-surface font-semibold">
                {orderDetails.customerEmail}
              </strong>
              . You will receive real-time notifications once your heirloom pieces are hand-packed.
            </p>
          </div>
        </ModalBody>

        <ModalFooter className="flex items-center justify-end gap-3">
          <Button
            as={Link}
            href="/cart"
            variant="light"
            size="md"
            className="text-olive-gray font-medium text-xs hover:text-primary"
            onClick={onClose}
          >
            Review Cart
          </Button>

          <Button
            as={Link}
            href="/"
            size="md"
            className="bg-primary hover:bg-primary-container text-white font-semibold text-xs px-5 rounded-xl shadow-xs"
            onClick={onClose}
          >
            Explore More Culinary Pieces
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
