"use client"

import * as React from "react";

import {useFormContext} from "react-hook-form";

import type {FormValues} from "../schema";
import {
  useWatchTruthyFieldsPercentage
} from "../hooks/use-watch-truthy-fields-percentage";

import {ChecklistSection} from "../checklist-section";
import {ChecklistStep} from "../checklist-step";
import {useScopedI18n} from "@/locales/client";
import {
  useWatchHasErrors
} from "@/app/[locale]/checklists/shark/components/checklist-form/hooks/use-watch-has-errors";

const CHILD_FIELDS = [
  'check_bailout_pressure',
  'check_bailout_connections',
]

export function BailoutChecklistSection() {
  const t = useScopedI18n("rebreather_checklists.shark.bailout_section")
  const form = useFormContext<FormValues>()

  const completePercentage = useWatchTruthyFieldsPercentage(CHILD_FIELDS)
  const hasErrors = useWatchHasErrors(CHILD_FIELDS)

  return (
    <ChecklistSection
      title={t('title')}
      subtitle={t('subtitle')}
      completePercentage={completePercentage}
      hasErrors={hasErrors}
    >
      <ChecklistStep
        description={t('check_bailout_pressure_step')}
        name="check_bailout_pressure"
        control={form.control}
      />
      <ChecklistStep
        description={t('check_bailout_connections_step')}
        name="check_bailout_connections"
        control={form.control}
      />
    </ChecklistSection>
  )
}